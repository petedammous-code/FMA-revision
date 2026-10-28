---
id: ch05-baire
type: theorem
chapter: 5
title: Théorème de Baire (1899)
ref: Théorème V.2.1
page: 96
importance: 2
depends: []
tags: [baire, complet, dense, ouvert, ferme, interieur]
---
## Intuition

> 💡 Un espace complet est « trop gros » pour être recouvert par une suite de parties « maigres ». Une partie fermée d'intérieur vide est une partie très fine (un point dans $\R$, une droite dans $\R^2$) : aucune boule n'y tient. Baire dit qu'une **suite** de telles parties ne suffit jamais à remplir une boule d'un espace complet. Ainsi $\R^2$ n'est pas réunion dénombrable de droites, et $\R$ n'est pas dénombrable.

Image mentale de la preuve : on se fabrique des boules fermées emboîtées de rayons $\to0$, chacune évitant le $n$-ième fermé ; la complétude garantit que leurs centres convergent vers un point qui évite **tous** les fermés.

Vocabulaire, dans un espace métrique $(X,d)$ : l'**intérieur** $\mathring A$ d'une partie $A$ est la réunion des boules ouvertes contenues dans $A$ ; $A$ est **dense** si son adhérence $\bar A$ est $X$, i.e. si $A$ rencontre tout ouvert non vide ; $X$ est **complet** si toute suite de Cauchy converge. On note $B(x,r)=\{y : d(x,y)<r\}$ et $\bar B(x,r)=\{y : d(x,y)\le r\}$ (un fermé).

## Énoncé

**Théorème (poly, Théorème V.2.1, p. 96).** Dans un espace métrique complet, la réunion d'une famille dénombrable de fermés d'intérieur vide est encore d'intérieur vide. De manière équivalente, une intersection dénombrable d'ouverts denses est dense.

Autrement dit, si $(X,d)$ est complet :

* si $(F_n)_{n\ge1}$ sont des fermés de $X$ avec $\mathring F_n=\emptyset$ pour tout $n$, alors $\mathrm{int}\Big(\bigcup_{n\ge1}F_n\Big)=\emptyset$ ;
* si $(U_n)_{n\ge1}$ sont des ouverts denses de $X$, alors $\bigcap_{n\ge1}U_n$ est dense dans $X$.

**Forme utilisée en pratique.** Si $X$ est complet, non vide, et $X=\bigcup_{n\ge1}F_n$ avec des $F_n$ fermés, alors **l'un au moins des $F_n$ est d'intérieur non vide**.

## Hypothèses

### H1 — $X$ complet

**Rôle.** C'est elle qui fait converger la suite des centres des boules emboîtées vers un point $x$ ; sans elle, la « cible » peut manquer à l'espace.

**Si on la retire.** $X=\Q$ avec $d(x,y)=|x-y|$ (non complet). On a $\Q=\bigcup_{q\in\Q}\{q\}$, réunion **dénombrable** de fermés ; chaque $\{q\}$ est d'intérieur vide dans $\Q$ (toute boule $]q-r,q+r[\cap\Q$ contient d'autres rationnels). Pourtant la réunion est $\Q$, d'intérieur $\Q\ne\emptyset$.

### H2 — famille dénombrable

**Rôle.** La construction est une **récurrence** : à l'étape $n$, on évite $F_n$. On ne peut traiter qu'une suite de fermés.

**Si on la retire.** $\R=\bigcup_{x\in\R}\{x\}$ : réunion (non dénombrable) de fermés d'intérieur vide, d'intérieur $\R$.

### H3 — les $F_n$ sont fermés (resp. les $U_n$ ouverts)

**Rôle.** Dans la preuve, « $U_n$ ouvert dense » assure que $U_n\cap B(x_{n-1},r_{n-1})$ est un ouvert **non vide**, qui contient donc une boule.

**Si on la retire.** $\R=\Q\cup(\R\setminus\Q)$ : deux parties d'intérieur vide (non fermées), de réunion $\R$. De façon équivalente, $\Q$ et $\R\setminus\Q$ sont denses (non ouverts) et d'intersection vide.

## Idée de la preuve

Soit $W$ un ouvert non vide ; on veut un point de $W\cap\bigcap_nU_n$. Par densité, on choisit des boules fermées emboîtées $\bar B(x_n,r_n)\subset U_n\cap B(x_{n-1},r_{n-1})$ avec $r_n\le2^{-n}$ ; les centres forment une suite de Cauchy, dont la limite (complétude) est dans toutes les boules.

## Preuve

*Le poly renvoie au cours de 1re année ([11], théorème 4.1) ; voici la preuve classique.*

**Forme « ouverts denses ».** Soient $(U_n)_{n\ge1}$ des ouverts denses de $X$ complet, et $W$ un ouvert non vide de $X$. Montrons que $W\cap\bigcap_{n\ge1}U_n\ne\emptyset$ : cela prouve la densité.

* *Initialisation.* $U_1$ est dense et $W$ est un ouvert non vide, donc $W\cap U_1$ est un ouvert non vide : il contient une boule $B(x_1,s_1)$. Posons $r_1=\min(s_1/2,\,1/2)$ ; alors $\bar B(x_1,r_1)\subset B(x_1,s_1)\subset W\cap U_1$.
* *Récurrence.* Supposons construits $x_n$ et $r_n\in\,]0,2^{-n}]$. L'ouvert $B(x_n,r_n)$ est non vide et $U_{n+1}$ est dense, donc $B(x_n,r_n)\cap U_{n+1}$ est un ouvert non vide ; il contient une boule $B(x_{n+1},s_{n+1})$, et avec $r_{n+1}=\min(s_{n+1}/2,\,2^{-(n+1)})$ :
$$
\bar B(x_{n+1},r_{n+1})\subset U_{n+1}\cap B(x_n,r_n)\subset U_{n+1}\cap\bar B(x_n,r_n).
$$
* *Suite de Cauchy.* Les boules fermées sont emboîtées : $\bar B(x_m,r_m)\subset\bar B(x_n,r_n)$ pour $m\ge n$. En particulier $d(x_m,x_n)\le r_n\le2^{-n}$ pour $m\ge n$ : la suite $(x_n)$ est de Cauchy. Comme $X$ est complet, elle converge vers un $x\in X$.
* *Conclusion.* Pour $n$ fixé, $x_m\in\bar B(x_n,r_n)$ pour tout $m\ge n$, et cette boule est fermée, donc $x\in\bar B(x_n,r_n)\subset U_n$. Et $x\in\bar B(x_1,r_1)\subset W$. Donc $x\in W\cap\bigcap_nU_n$.

**Équivalence des deux formes.** Pour toute partie $A$ de $X$, $X\setminus\mathring A=\overline{X\setminus A}$. Donc $F$ est fermé d'intérieur vide si et seulement si $U=X\setminus F$ est ouvert et dense. Posons $U_n=X\setminus F_n$ ; alors $X\setminus\bigcup_nF_n=\bigcap_nU_n$, et
$$
\mathrm{int}\Big(\bigcup_nF_n\Big)=\emptyset\iff\overline{\bigcap_nU_n}=X .
$$
La forme « ouverts denses » démontrée ci-dessus donne donc la forme « fermés d'intérieur vide ». Enfin, si $X\ne\emptyset$ et $X=\bigcup_nF_n$, l'intérieur de la réunion est $X\ne\emptyset$, donc un $F_n$ au moins est d'intérieur non vide. $\square$

## Preuve à trous

Soient $U_n$ ouverts denses, $W$ ouvert non vide. Comme $U_1$ est dense, <trou indice="que peut-on dire d'un ouvert non vide intersecté avec un ouvert dense ?">$W\cap U_1$ est un ouvert non vide</trou>, qui contient une boule fermée $\bar B(x_1,r_1)$ avec $r_1\le\frac12$. Par récurrence, <trou indice="placer la boule suivante à l'intérieur de la précédente ET dans le U suivant">on choisit $\bar B(x_{n+1},r_{n+1})\subset U_{n+1}\cap B(x_n,r_n)$ avec $r_{n+1}\le2^{-(n+1)}$</trou>. Les boules sont emboîtées, donc <trou>$d(x_m,x_n)\le r_n\le2^{-n}$ pour $m\ge n$ : $(x_n)$ est de Cauchy</trou>, et converge vers $x$ par complétude. Enfin <trou indice="les boules fermées contiennent tous les termes à partir d'un rang">$x\in\bar B(x_n,r_n)\subset U_n$ pour tout $n$, car ces boules sont fermées</trou>, et $x\in W$. Donc $\bigcap_nU_n$ rencontre tout ouvert non vide. La forme « fermés » s'obtient par passage au complémentaire. $\square$

## Exemples

* **$\R$ n'est pas dénombrable.** Sinon $\R=\bigcup_{n}\{q_n\}$ serait réunion dénombrable de fermés d'intérieur vide, alors que $\R$ est complet et d'intérieur $\R$.
* **Un Banach de dimension infinie n'a pas de base algébrique dénombrable.** Si $(e_n)_{n\ge1}$ était une base de $E$, on aurait $E=\bigcup_nF_n$ avec $F_n=\mathrm{Vect}(e_1,\dots,e_n)$. Chaque $F_n$ est fermé (un sous-espace de dimension finie est complet, donc fermé) et d'intérieur vide : un sous-espace contenant une boule $B(x,r)$ contient $B(0,r)=B(x,r)-x$, donc tout $E$ par homothétie, ce qui est exclu car $F_n\ne E$. Contradiction avec Baire. Conséquence : $\R[X]$ n'est complet pour **aucune** norme.
* **Application ouverte.** Dans la preuve de [[ch05-application-ouverte]], on écrit $F=\bigcup_{n\ge1}n\,\overline{f(B)}$ et Baire fournit un $n$ tel que $n\,\overline{f(B)}$ est d'intérieur non vide.

## Pièges

* > ⚠️ Baire donne seulement qu'**un** des $F_n$ est d'intérieur non vide, sans dire lequel : c'est un résultat d'existence.
* Les deux hypothèses « fermés » et « dénombrable » sont indispensables (contre-exemples H2, H3) ; penser à vérifier que les $F_n$ sont **fermés** (souvent on les remplace par leurs adhérences, comme $\overline{f(B)}$ dans l'application ouverte).
* « Intérieur vide » n'est pas « petit en mesure » : un fermé d'intérieur vide de $[0,1]$ peut être de mesure positive (Cantor « gras »).
* Le théorème vaut dans tout espace métrique complet, pas seulement dans les Banach (par exemple dans un fermé d'un Banach).

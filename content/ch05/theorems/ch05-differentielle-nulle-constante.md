---
id: ch05-differentielle-nulle-constante
type: corollary
chapter: 5
title: Différentielle nulle sur un ouvert connexe ⇒ fonction constante
ref: Corollaire V.4.5
page: 104
importance: 2
depends: [ch05-accroissements-finis]
tags: [connexe, constante, accroissements-finis, localement-constante]
---
## Intuition

> 💡 Si $df_x=0$ partout, $f$ ne varie pas « infinitésimalement ». Sur une boule, que l'on peut traverser en ligne droite, le TAF transforme cela en « $f$ ne varie pas du tout ». Sur un ouvert de forme quelconque, on avance de boule en boule : tant que l'ouvert est **d'un seul tenant** (connexe), la valeur se propage partout.

Rappel : un espace topologique $U$ est **connexe** s'il n'est pas réunion de deux ouverts disjoints non vides ; de façon équivalente, toute partie de $U$ à la fois ouverte et fermée dans $U$ est $\emptyset$ ou $U$. Une fonction est **localement constante** si tout point a un voisinage sur lequel elle est constante. Le contexte est celui du TAF ([[ch05-accroissements-finis]]) : $E$, $F$ e.v.n., $U$ ouvert de $E$, $f:U\to F$ différentiable sur $U$.

## Énoncé

**Corollaire (poly, Corollaire V.4.5, p. 104).** Soient $E$ et $F$ des espaces vectoriels normés, $U$ un ouvert de $E$ et $f:U\to F$ une application différentiable sur $U$. Si $U$ est connexe, et que $df_x$ est nulle pour tout $x\in U$, alors $f$ est constante sur $U$.

## Hypothèses

### H1 — $U$ connexe

**Rôle.** Le TAF donne seulement que $f$ est **localement** constante (constante sur chaque boule contenue dans $U$). La connexité permet de passer du local au global.

**Si on la retire.** $U=\,]0;1[\,\cup\,]2;3[\,\subset\R$, $f=0$ sur $]0;1[$ et $f=1$ sur $]2;3[$ : $f$ est différentiable de différentielle nulle en tout point de $U$, mais n'est pas constante. Elle est seulement constante sur chaque **composante connexe** de $U$.

### H2 — $df_x=0$ pour **tout** $x\in U$

**Rôle.** Elle est utilisée sur chaque boule de $U$ (TAF avec $k=0$).

**Si on la retire.** Sur $U=\R$ (connexe), $f=\mathbf 1_{]0;+\infty[}$ est différentiable de différentielle nulle en tout point sauf $0$, où elle n'est pas différentiable (elle n'y est pas continue) : elle n'est pas constante. Un seul point exceptionnel suffit à tout casser si $f$ n'y est pas différentiable. (Pour une fonction **continue** d'une variable, un ensemble dénombrable de points exceptionnels est toléré, Remarque V.4.2, [[ch05-accroissements-finis-denombrable]] ; mais l'énoncé du poly demande la différentiabilité partout.)

### H3 — $U$ ouvert

**Rôle.** Cadre de la définition de la différentiabilité, et surtout : tout point de $U$ est le centre d'une boule contenue dans $U$, sur laquelle on applique le TAF.

**Si on la retire.** Hypothèse de cadre : la Définition V.3.1 ne définit la différentielle que sur un ouvert, et la preuve a besoin d'une boule autour de chaque point. Le résultat ne s'étend pas naïvement aux parties connexes non ouvertes : il existe un exemple classique (Whitney, 1935) d'une fonction $C^1$ sur $\R^2$ dont la différentielle est nulle en tout point d'un arc connexe, sans que la fonction soit constante sur cet arc.

## Idée de la preuve

Sur une boule (convexe) contenue dans $U$, le TAF avec $k=0$ montre que $f$ est constante : $f$ est localement constante. L'ensemble des points où $f$ prend la valeur $f(x_0)$ est alors ouvert et fermé dans $U$, non vide, donc égal à $U$ par connexité.

## Preuve

*Cas convexe.* Si $U$ est convexe, comme $\sup_{x\in U}\|df_x\|=0$, le TAF ([[ch05-accroissements-finis]]) avec $k=0$ donne $\|f(b)-f(a)\|_F\le0$ pour tous $a,b\in U$ : $f$ est constante.

*$f$ est localement constante.* Soit $x\in U$. Comme $U$ est ouvert, il existe $r>0$ tel que la boule ouverte $B(x,r)$ soit contenue dans $U$. Une boule d'un espace vectoriel normé est convexe : si $\|y-x\|<r$ et $\|z-x\|<r$, alors pour $t\in[0;1]$, $\|ty+(1-t)z-x\|\le t\|y-x\|+(1-t)\|z-x\|<r$. La restriction de $f$ à l'ouvert convexe $B(x,r)$ est différentiable de différentielle nulle, donc, par le cas convexe, $f$ est constante, égale à $f(x)$, sur $B(x,r)$.

*Passage au global.* Supposons $U$ non vide (sinon il n'y a rien à montrer), fixons $x_0\in U$ et posons $A=\{x\in U\ ;\ f(x)=f(x_0)\}$.
* $A$ est non vide : $x_0\in A$.
* $A$ est ouvert : si $x\in A$, $f=f(x)=f(x_0)$ sur une boule $B(x,r)\subset U$, donc $B(x,r)\subset A$.
* $U\setminus A$ est ouvert : si $x\in U\setminus A$, $f=f(x)\neq f(x_0)$ sur une boule $B(x,r)\subset U$, donc $B(x,r)\subset U\setminus A$.

Ainsi $A$ est une partie ouverte et fermée (dans $U$) non vide du connexe $U$ : $A=U$, c'est-à-dire $f(x)=f(x_0)$ pour tout $x\in U$. $\square$

*Remarque.* Le fait que $A$ est fermé dans $U$ peut aussi se voir par continuité : $f$ est continue ([[ch05-differentiable-implique-continue]]) et $A=f^{-1}(\{f(x_0)\})$. Le poly résume la preuve ainsi : « un e.v.n. est localement convexe, donc $f$ est localement constante, et une fonction localement constante sur un connexe est constante ».

## Preuve à trous

Soit $x\in U$. Comme $U$ est ouvert, il existe $r>0$ avec $B(x,r)\subset U$ ; cette boule est <trou indice="quelle propriété géométrique des boules permet d'appliquer le TAF ?">convexe</trou>, donc le TAF avec $k=\sup\|df\|=0$ donne <trou>$f$ constante égale à $f(x)$ sur $B(x,r)$</trou> : $f$ est localement constante. Fixons $x_0\in U$ et $A=\{x\in U\ ;\ f(x)=f(x_0)\}$. Alors $A\neq\emptyset$, et <trou indice="utiliser la constance locale aux points de A et de son complémentaire">$A$ et $U\setminus A$ sont ouverts (chacun contient une boule autour de chacun de ses points)</trou>. Par <trou>connexité de $U$, $A=U$</trou>, donc $f$ est constante. $\square$

## Exemples

* **Différentielle constante ⇒ affine.** Si $U$ est un ouvert connexe et $df_x=L$ pour tout $x\in U$ (un même $L\in\mathcal L(E;F)$), alors $g=f-L$ vérifie $dg_x=df_x-L=0$ ([[ch05-linearite-differentielle]], [[ch05-differentielle-lineaire]]), donc $g$ est constante : $f(x)=L(x)+c$ sur $U$.
* **Ouvert connexe non convexe.** Sur $U=\R^2\setminus\{0\}$ (connexe), si $f:U\to\R$ a ses deux dérivées partielles nulles et est différentiable, alors $f$ est constante. Le TAF seul ne suffirait pas pour relier $(1,0)$ et $(-1,0)$, car le segment passe par $0\notin U$ ; la connexité (chaîne de boules) règle le problème.
* **Analyse complexe.** Si $f$ est holomorphe sur un ouvert connexe $\Omega\subset\C$ avec $f'\equiv0$, alors $df_z(h)=f'(z)h=0$ pour tout $z$, donc $f$ est constante sur $\Omega$ (un ouvert connexe de $\C\simeq\R^2$). C'est une autre façon de conclure la *variante* de la preuve de [[ch01-liouville]] une fois obtenu $f'\equiv0$ (la fiche y passe, elle, par une primitive le long d'un segment).

## Pièges

* > ⚠️ Ne pas oublier la **connexité** : sur un ouvert non connexe, $df=0$ donne seulement « constante sur chaque composante connexe ».
* Ne pas confondre **connexe** et **convexe** : le TAF direct demande la convexité (ou au moins le segment), le corollaire n'exige que la connexité grâce à l'argument « ouvert-fermé ».
* Pour une fonction continue d'une variable réelle, $f'=0$ **sauf** sur un ensemble non dénombrable ne suffit pas (escalier de Cantor) ; ici on demande $df_x=0$ en **tout** point.
* Le résultat vaut dans tout e.v.n. $E$ (même de dimension infinie) et pour tout e.v.n. $F$ : aucune complétude n'est requise.

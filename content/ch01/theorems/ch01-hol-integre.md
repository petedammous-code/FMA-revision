---
id: ch01-hol-integre
type: proposition
chapter: 1
title: $\Hol(\Omega)$ est une algèbre intègre pour $\Omega$ connexe ; produit nul sur le bord
ref: Exercice I.12.3
page: 31
importance: 2
depends: [ch01-zeros-isoles, ch01-maximum-sur-le-bord, ch01-stabilite-operations]
tags: [integre, zeros-isoles, principe-maximum, connexite, rigidite]
---
## Intuition

> 💡 Pour des fonctions continues (ou même $C^\infty$) réelles, on fabrique facilement deux fonctions non nulles de produit nul : l'une vit à gauche, l'autre à droite, leurs supports sont disjoints. Pour des fonctions **holomorphes** sur un ouvert **connexe**, c'est impossible : une fonction holomorphe non nulle ne s'annule qu'en des points isolés, donc l'autre facteur doit s'annuler « presque partout », donc partout.

Vocabulaire. Un anneau commutatif $A$ (ici $A=\Hol(\Omega)$, l'ensemble des fonctions holomorphes sur $\Omega$, muni de $+$ et $\times$ point par point, cf. [[ch01-def-holomorphe]] et [[ch01-stabilite-operations]]) est dit **intègre** si $1\neq0$ et si $fg=0$ entraîne $f=0$ ou $g=0$. Le poly souligne que c'est « rare pour une algèbre de fonctions ».

Le point 2 va plus loin : il suffit que le produit soit nul **sur le bord** d'un domaine borné, car le [[ch01-maximum-sur-le-bord|principe du maximum sur le bord]] propage la nullité du bord vers l'intérieur.

## Énoncé

**Proposition (poly, Exercice I.12.3, p. 31).** Soit $D:=\{z\in\C : |z|<1\}$ le disque unité ouvert et $\bar D$ son adhérence.

1. Si le produit de deux fonctions holomorphes sur $D$ est nul, l'une des deux fonctions est nulle.
2. Soient $f,g$ deux fonctions continues sur $\bar D$, holomorphes sur $D$. Si $fg$ est nulle sur le cercle $\partial\bar D=\bar D\setminus D$, alors $f$ ou $g$ est nulle sur $\bar D$.
3. (Généralisation.) Soit $\Omega$ un ouvert connexe non vide de $\C$.
   * (a) Si $f,g\in\Hol(\Omega)$ vérifient $fg=0$ sur $\Omega$, alors $f=0$ ou $g=0$ sur $\Omega$ : l'algèbre $\Hol(\Omega)$ est intègre.
   * (b) Si de plus $\Omega$ est borné, et si $f,g:\bar\Omega\to\C$ sont continues sur $\bar\Omega$, holomorphes sur $\Omega$, avec $fg=0$ sur $\partial\Omega=\bar\Omega\setminus\Omega$, alors $f=0$ sur $\bar\Omega$ ou $g=0$ sur $\bar\Omega$.

Les points 1 et 2 sont les cas particuliers $\Omega=D$ de 3(a) et 3(b) ; on démontre directement le cas général.

## Hypothèses

### H1 — $\Omega$ connexe

**Rôle.** C'est l'hypothèse du [[ch01-zeros-isoles|principe des zéros isolés]] : sur un connexe, une fonction holomorphe non identiquement nulle n'a que des zéros isolés. Elle sert aussi dans le [[ch01-maximum-sur-le-bord|corollaire du maximum]].

**Si on la retire.** $\Omega=D(0,1)\cup D(3,1)$ (deux disques disjoints). On pose $f=1$ sur $D(0,1)$, $f=0$ sur $D(3,1)$, et $g=1-f$. Ces fonctions sont localement constantes, donc holomorphes sur $\Omega$ ; $fg=0$ sur $\Omega$ mais ni $f$ ni $g$ n'est nulle. L'algèbre $\Hol(\Omega)$ n'est pas intègre : elle contient l'**idempotent** $f$ ($f^2=f$, $f\neq0,1$).

### H2 — $f$ et $g$ holomorphes (et pas seulement continues ou $C^\infty$)

**Rôle.** C'est l'holomorphie qui donne la rigidité (zéros isolés, principe du maximum).

**Si on la retire.** Sur $D$, posons $f(x+iy)=\max(x,0)$ et $g(x+iy)=\max(-x,0)$ : continues sur $\bar D$, $fg=0$ partout, aucune n'est nulle. Avec des fonctions plateaux $C^\infty$ à supports disjoints, on obtient même un contre-exemple $C^\infty$. Donc $C^0(\Omega)$ et $C^\infty(\Omega)$ ne sont pas intègres.

### H3 — (point 3(b)) $\Omega$ borné, $f$ et $g$ continues sur $\bar\Omega$

**Rôle.** La continuité sur le compact $\bar\Omega$ permet d'appliquer [[ch01-maximum-sur-le-bord]] à $fg$, et donne un sens à « $fg=0$ sur $\partial\Omega$ ». Elle sert aussi à passer de « $f=0$ sur $\Omega$ » à « $f=0$ sur $\bar\Omega$ ».

**Si on la retire.**
* Sans continuité au bord : sur $\bar D$, $f(z)=z$ si $|z|<1$ et $f(z)=0$ si $|z|=1$ ; $g=1$. Alors $f$ est holomorphe sur $D$, $fg=0$ sur $\partial D$, mais ni $f$ ni $g$ n'est nulle ($f$ n'est pas continue sur $\bar D$).
* Sans « borné » : la conclusion devient **fausse**. Prenons $\Omega=\C\setminus\{0\}$ : ouvert, connexe, non borné, d'adhérence $\bar\Omega=\C$ et de bord $\partial\Omega=\bar\Omega\setminus\Omega=\{0\}$. Les fonctions $f(z)=z$ et $g=1$ sont continues sur $\bar\Omega=\C$ et holomorphes sur $\Omega$, et $fg=z$ s'annule sur $\partial\Omega=\{0\}$ ; pourtant ni $f$ ni $g$ n'est nulle. (Cas encore plus dégénéré : $\Omega=\C$, de bord vide, avec $f=g=1$ : la condition « $fg=0$ sur $\partial\Omega$ » est vide.) Ce qui casse dans la preuve : le principe du maximum sur le bord est faux sur un ouvert non borné ; par exemple, sur le demi-plan $\{\Re(z)>0\}$, $h(z)=e^z$ vérifie $|h(iy)|=1$ sur le bord $i\R$ mais n'est pas bornée. (Sur certains ouverts non bornés « raisonnables » comme ce demi-plan, la conclusion reste néanmoins vraie, par un argument de réflexion hors programme ; mais elle n'est pas vraie en général.)

### H4 — (point 3(b)) $fg$ nulle sur **tout** le bord

**Rôle.** On en tire $\sup_{\partial\Omega}|fg|=0$.

**Si on la retire.** $f(z)=z-1$, $g=1$ sur $\bar D$ : $fg$ s'annule au point $1$ du bord, mais pas ailleurs, et ni $f$ ni $g$ n'est nulle.

## Idée de la preuve

(a) Si $f\not\equiv0$, ses zéros sont isolés ; en dehors d'eux $g=0$, et chaque zéro de $f$ est limite de points où $f\neq0$, donc $g=0$ partout par continuité. (b) Le maximum de $|fg|$ sur $\bar\Omega$ est atteint au bord, où il vaut $0$ : donc $fg=0$ sur $\Omega$, et on applique (a).

## Preuve

**Point 3(a) (donc point 1).** Soient $f,g\in\Hol(\Omega)$ avec $fg=0$ sur $\Omega$. Supposons $f$ non identiquement nulle ; montrons que $g=0$. Soit $z\in\Omega$.

* Si $f(z)\neq0$, alors $g(z)=0$ puisque $f(z)g(z)=0$.
* Si $f(z)=0$ : comme $\Omega$ est connexe et $f\not\equiv0$, le [[ch01-zeros-isoles|principe des zéros isolés]] fournit $\eps>0$ tel que $f(w)\neq0$ pour tout $w\in\Omega\cap\big(D(z,\eps)\setminus\{z\}\big)$. Quitte à diminuer $\eps$, $D(z,\eps)\subset\Omega$ ($\Omega$ ouvert). Les points $w_n:=z+\eps/(n+2)$, $n\in\N$, sont dans $D(z,\eps)\setminus\{z\}$, donc $f(w_n)\neq0$, donc $g(w_n)=0$ par le cas précédent. Comme $w_n\to z$ et $g$ est continue, $g(z)=\lim g(w_n)=0$.

Donc $g=0$ sur $\Omega$. Ainsi $f=0$ ou $g=0$. Enfin $1\neq0$ dans $\Hol(\Omega)$ puisque $\Omega\neq\emptyset$ : $\Hol(\Omega)$ est intègre.

**Point 3(b) (donc point 2).** Soit $\Omega$ connexe, borné, non vide, et $f,g$ continues sur $\bar\Omega$, holomorphes sur $\Omega$, avec $fg=0$ sur $\partial\Omega$. La fonction $h:=fg$ est continue sur $\bar\Omega$ (produit de fonctions continues) et holomorphe sur $\Omega$ ([[ch01-stabilite-operations]]). Le corollaire du principe du maximum ([[ch01-maximum-sur-le-bord]], poly, Corollaire I.12.2, p. 31) donne
$$
\sup_{\bar\Omega}|h| = \sup_{\partial\Omega}|h| = 0 .
$$
Donc $h=0$ sur $\bar\Omega$, en particulier $fg=0$ sur $\Omega$. Par 3(a) appliqué aux restrictions $f_{|\Omega},g_{|\Omega}\in\Hol(\Omega)$, on a par exemple $f=0$ sur $\Omega$. Tout point $z\in\bar\Omega$ est limite d'une suite $(z_n)$ de points de $\Omega$ ; par continuité de $f$ sur $\bar\Omega$, $f(z)=\lim f(z_n)=0$. Donc $f=0$ sur $\bar\Omega$ (et de même pour $g$ dans l'autre cas). $\square$

Pour les points 1 et 2 : on prend $\Omega=D$, qui est ouvert, connexe (convexe), borné, non vide, d'adhérence $\bar D$ et de bord $\partial D=C(0,1)$.

## Preuve à trous

**3(a).** Soient $f,g\in\Hol(\Omega)$, $fg=0$, $f\not\equiv0$, et $z\in\Omega$. Si $f(z)\neq0$, alors $g(z)=0$. Si $f(z)=0$, comme $\Omega$ est connexe, <trou indice="quel principe interdit aux zéros de s'accumuler ?">le principe des zéros isolés donne $\eps>0$ avec $D(z,\eps)\subset\Omega$ et $f\neq0$ sur $D(z,\eps)\setminus\{z\}$</trou>. Alors $g$ est nulle sur $D(z,\eps)\setminus\{z\}$, et <trou indice="z est limite de points de ce disque épointé">par continuité de $g$ (avec $w_n=z+\eps/(n+2)\to z$), $g(z)=0$</trou>. Donc $g\equiv0$.

**3(b).** La fonction $h=fg$ est continue sur $\bar\Omega$ et holomorphe sur $\Omega$, et <trou indice="corollaire du principe du maximum, Ω connexe borné">$\sup_{\bar\Omega}|h|=\sup_{\partial\Omega}|h|=0$</trou>. Donc $fg=0$ sur $\Omega$, donc par 3(a) $f=0$ (par exemple) sur $\Omega$, et <trou>$f=0$ sur $\bar\Omega$ car tout point de $\bar\Omega$ est limite de points de $\Omega$ et $f$ est continue sur $\bar\Omega$</trou>. $\square$

## Exemples

* **Idempotents.** Si $\Omega$ est connexe et $f\in\Hol(\Omega)$ vérifie $f^2=f$, alors $f(f-1)=0$, donc $f=0$ ou $f=1$. (Comparer avec H1 : sur deux disques disjoints, l'indicatrice de l'un est un idempotent non trivial.)
* **Équation polynomiale.** Si $\Omega$ est connexe, $P=c\prod_{k=1}^d(X-\lambda_k)\in\C[X]$ avec $c\neq0$, $d\ge1$, et $P(f)=0$ pour une $f\in\Hol(\Omega)$, alors $c\prod_k(f-\lambda_k)=0$ ; par intégrité (et récurrence sur le nombre de facteurs), l'un des facteurs $f-\lambda_k$ est nul : $f$ est la constante $\lambda_k$. Par exemple, $f^2=-1$ sur $\Omega$ connexe impose $f\equiv i$ ou $f\equiv-i$.
* **Nulle sur un demi-cercle ⇒ nulle.** Soit $f$ continue sur $\bar D$, holomorphe sur $D$, nulle sur le demi-cercle fermé $\{e^{i\theta}:\theta\in[0,\pi]\}$. Posons $g(z)=f(-z)$, continue sur $\bar D$ et holomorphe sur $D$. Si $\zeta=e^{i\theta}$ avec $\theta\in[\pi,2\pi]$, alors $-\zeta=e^{i(\theta-\pi)}$ avec $\theta-\pi\in[0,\pi]$, donc $g(\zeta)=0$. Ainsi $fg=0$ sur tout $\partial D$, et le point 2 donne $f\equiv0$ ou $g\equiv0$ sur $\bar D$, donc $f\equiv0$ dans les deux cas. (Avec le produit des $k$ fonctions $z\mapsto f(e^{2i\pi j/k}z)$, $0\le j\le k-1$, et le même argument, on obtient : une telle $f$ nulle sur un arc fermé de longueur $2\pi/k$ est identiquement nulle.)

## Pièges

* > ⚠️ La connexité est **indispensable** pour l'intégrité : sur un ouvert non connexe, les indicatrices de composantes connexes donnent des diviseurs de zéro.
* « $fg=0$ » signifie $f(z)g(z)=0$ **pour tout** $z$ ; ce n'est pas « $f$ ou $g$ s'annule en chaque point » qu'on conclut, mais la nullité **globale** de l'un des deux facteurs. Ne pas confondre l'énoncé ponctuel (trivial) et l'énoncé fonctionnel.
* Dans le point 2, il faut la **continuité jusqu'au bord** et le caractère **borné** pour utiliser le principe du maximum (sans « borné », $f(z)=z$, $g=1$ sur $\Omega=\C\setminus\{0\}$ est un contre-exemple) ; et la nullité doit porter sur **tout** le bord (voir H3, H4).
* La conclusion du point 2 porte sur $\bar D$ entier, pas seulement sur $D$ : penser à l'argument final de continuité.

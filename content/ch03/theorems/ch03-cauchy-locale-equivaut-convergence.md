---
id: ch03-cauchy-locale-equivaut-convergence
type: lemma
chapter: 3
title: Critère de Cauchy pour la convergence localement uniforme
ref: Lemme III.1.3
page: 60
importance: 1
depends: [ch03-convergence-uniforme-compacts, ch03-convergence-localement-uniforme]
tags: [cauchy, completude, convergence-uniforme, localement-uniforme]
---
## Intuition

> 💡 C'est le critère de Cauchy « uniforme » : pour savoir qu'une suite de fonctions converge uniformément, il suffit de vérifier que ses termes se rapprochent **les uns des autres** uniformément, sans connaître la limite à l'avance. La limite est fabriquée point par point grâce à la complétude de $\C$, puis on vérifie que la convergence est bien uniforme.

Les notions « localement uniformément convergente » et « localement uniformément de Cauchy » sont définies dans [[ch03-convergence-localement-uniforme]]. Le lemme dit qu'elles coïncident ; il sert à démarrer la preuve du théorème de Weierstraß ([[ch03-weierstrass]]), dont l'hypothèse est formulée en termes de suite de Cauchy.

## Énoncé

**Lemme (poly, Lemme III.1.3, p. 60).** Soient $\Omega$ un ouvert de $\C$ et $(f_n)_{n\in\N}$ une suite de fonctions de $\Omega$ dans $\C$. Alors $(f_n)_{n\in\N}$ est localement uniformément de Cauchy si et seulement si $(f_n)_{n\in\N}$ converge localement uniformément.

## Hypothèses

### H1 — les $f_n$ sont à valeurs dans $\C$, qui est complet

**Rôle.** Pour $z$ fixé, la suite $(f_n(z))_n$ est de Cauchy dans $\C$, donc converge : c'est ce qui définit la limite $f(z)$.

**Si on la retire.** Pour des fonctions à valeurs dans $\Q$ (non complet), soit $f_n$ la fonction constante égale à la troncature décimale de $\sqrt2$ à $n$ chiffres après la virgule. Alors $|f_p-f_q|\le10^{-\min(p,q)}$ partout : la suite est uniformément de Cauchy, mais elle n'a pas de limite à valeurs dans $\Q$. (Le résultat reste vrai pour des fonctions à valeurs dans un espace de Banach quelconque, avec la même preuve.)

### H2 — $\Omega$ ouvert

**Rôle.** Elle permet d'utiliser la reformulation par les compacts ([[ch03-convergence-uniforme-compacts]]) et donc de travailler sur un compact $K$ fixé.

**Si on la retire.** Hypothèse de confort : l'équivalence « uniformément de Cauchy sur $U$ $\Leftrightarrow$ uniformément convergente sur $U$ » est vraie sur **n'importe quel** ensemble $U$ (même preuve), donc on peut aussi raisonner directement sur les voisinages $U_x$, sans passer par les compacts.

## Idée de la preuve

On se ramène à un compact $K$ (ou à n'importe quel ensemble). Convergent $\Rightarrow$ Cauchy : inégalité triangulaire avec $\eps/2$. Cauchy $\Rightarrow$ convergent : on définit $f(z)$ par complétude de $\C$, puis on fait $m\to+\infty$ dans $|f_n(z)-f_m(z)|\le\eps$.

## Preuve

D'après [[ch03-convergence-uniforme-compacts]], il suffit de vérifier que, pour tout compact $K\subset\Omega$, la suite $(f_n)$ est uniformément de Cauchy sur $K$ si et seulement si elle converge uniformément sur $K$. Fixons un compact $K\subset\Omega$.

**Convergente $\Rightarrow$ de Cauchy.** Supposons que $(f_n)$ converge uniformément sur $K$ vers une fonction $f$ et soit $\eps>0$. Il existe $N\ge1$ tel que pour tout $n\ge N$ et tout $z\in K$, $|f_n(z)-f(z)|\le\eps/2$. Pour $n,m\ge N$ et $z\in K$, l'inégalité triangulaire donne
$$
|f_n(z)-f_m(z)|\le|f_n(z)-f(z)|+|f(z)-f_m(z)|\le\eps .
$$

**De Cauchy $\Rightarrow$ convergente.** Supposons $(f_n)$ uniformément de Cauchy sur $K$. Pour tout $z\in K$, la suite $(f_n(z))_n$ est de Cauchy dans $\C$ ; comme $\C$ est complet, elle converge, et on note $f(z)$ sa limite. Cela définit $f:K\to\C$. Soit $\eps>0$ : par hypothèse il existe $N\ge1$ tel que pour tout $z\in K$ et tous $m\ge n\ge N$,
$$
|f_n(z)-f_m(z)|\le\eps .
$$
À $n$ et $z$ fixés, on fait tendre $m\to+\infty$ ; par continuité du module, $|f_n(z)-f(z)|\le\eps$, pour tout $z\in K$ et tout $n\ge N$. Donc $\norm{f_n-f}_{\infty,K}\le\eps$ pour $n\ge N$ : convergence uniforme sur $K$.

**Recollement.** La limite obtenue sur $K$ est la limite simple $f(z)=\lim_n f_n(z)$ ; elle ne dépend donc pas de $K$ et définit une seule fonction $f:\Omega\to\C$ (chaque point $z$ appartient au compact $\{z\}$). La suite converge uniformément vers cette $f$ sur tout compact, donc localement uniformément par [[ch03-convergence-uniforme-compacts]]. $\square$

## Preuve à trous

On fixe un compact $K\subset\Omega$ (licite par [[ch03-convergence-uniforme-compacts]]).

Si $f_n\to f$ uniformément sur $K$, on choisit $N$ avec $|f_n-f|\le\eps/2$ sur $K$ pour $n\ge N$, et <trou indice="inégalité triangulaire">$|f_n(z)-f_m(z)|\le|f_n(z)-f(z)|+|f(z)-f_m(z)|\le\eps$ pour $n,m\ge N$, $z\in K$</trou>.

Si $(f_n)$ est uniformément de Cauchy sur $K$, pour chaque $z$ la suite $(f_n(z))$ est de Cauchy, donc <trou indice="propriété de C">converge dans $\C$, qui est complet ; on note $f(z)$ sa limite</trou>. Puis, partant de $|f_n(z)-f_m(z)|\le\eps$ pour $m\ge n\ge N$, <trou>on fait $m\to+\infty$ à $n$ et $z$ fixés : $|f_n(z)-f(z)|\le\eps$ pour tout $z\in K$, $n\ge N$</trou>. $\square$

## Exemples

* **Série entière.** Soit $\sum a_kz^k$ de rayon $R>0$ et $S_n(z)=\sum_{k\le n}a_kz^k$. Pour $0<r<R$ et $|z|\le r$, $|S_q(z)-S_p(z)|\le\sum_{k=p+1}^q|a_k|r^k$ pour $q>p$, reste d'une série convergente : $(S_n)$ est uniformément de Cauchy sur $\bar D(0,r)$. Par le lemme, $(S_n)$ converge localement uniformément sur $D(0,R)$, **sans** avoir eu à écrire la somme.
* **Utilisation dans Montel.** Dans la preuve du théorème de Montel, on obtient une sous-suite uniformément de Cauchy sur chaque disque $\bar D(z_0,r/2)$ ; ce lemme fournit alors la convergence localement uniforme.

## Pièges

* Dans le passage à la limite $m\to+\infty$, l'inégalité large $\le\eps$ se conserve ; une inégalité stricte $<\eps$ deviendrait $\le\eps$.
* Le rang $N$ obtenu doit être **indépendant de $z\in K$** : c'est l'uniformité. Il vient de l'hypothèse de Cauchy uniforme, pas du passage à la limite (qui est fait point par point).

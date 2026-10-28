---
id: ch01-ensemble-zeros-discret-ferme
type: corollary
chapter: 1
title: $Z(f,\Omega)$ est discret et fermé dans $\Omega$, donc localement fini
ref: Remarque I.11.4
page: 28
importance: 2
depends: [ch01-zeros-isoles, ch02-localement-fini-caracterisations]
tags: [zeros, discret, ferme, localement-fini, compact]
---
## Intuition

> 💡 Les zéros d'une fonction holomorphe non nulle forment un « nuage de points bien espacés » à l'intérieur de $\Omega$ : chaque zéro a sa bulle privée (il est **isolé**), et les zéros ne peuvent s'entasser contre un point de $\Omega$ (l'ensemble est **fermé dans $\Omega$**). Ils ont le droit de s'entasser **contre le bord** de $\Omega$, ou de partir à l'infini.

Conséquence pratique : dans tout compact $K\subset\Omega$ (par exemple un disque fermé contenu dans $\Omega$), il n'y a qu'un **nombre fini** de zéros. C'est ce qui rendra finies les sommes de la formule des résidus et du principe de l'argument au chapitre II.

Vocabulaire (poly, section II.4, p. 42) : une partie $P\subset\Omega$ est **discrète** si tous ses points sont isolés ([[ch01-def-point-accumulation]]) ; **fermée dans $\Omega$** si toute limite, appartenant à $\Omega$, d'une suite de points de $P$ est dans $P$ ; **localement finie dans $\Omega$** si tout $a\in\Omega$ a un voisinage qui ne rencontre $P$ qu'en un nombre fini de points, ce qui équivaut à : $P\cap K$ est fini pour tout compact $K\subset\Omega$.

## Énoncé

**Corollaire (poly, Remarque I.11.4, p. 28).** Soient $\Omega$ un ouvert connexe et $f$ une fonction holomorphe sur $\Omega$, non identiquement nulle. L'ensemble de ses zéros
$$
Z(f,\Omega):=\{z\in\Omega : f(z)=0\}
$$
est discret et fermé dans $\Omega$. Il est donc localement fini dans $\Omega$ : pour tout compact $K\subset\Omega$, $Z(f,\Omega)\cap K$ est fini.

## Hypothèses

### H1 — $\Omega$ connexe

**Rôle.** Elle sert, via le principe des zéros isolés ([[ch01-zeros-isoles]]), à garantir que chaque zéro est isolé.

**Si on la retire.** $\Omega=D(0,1)\cup D(3,1)$, $f=0$ sur $D(0,1)$, $f=1$ sur $D(3,1)$ : $f$ est holomorphe, non identiquement nulle, et $Z(f,\Omega)=D(0,1)$ n'est pas discret. Sans connexité, la conclusion reste vraie si l'on suppose que $f$ n'est identiquement nulle sur **aucune** composante connexe de $\Omega$ ([[ch01-zeros-isoles-sans-connexite]]).

### H2 — $f$ non identiquement nulle

**Rôle.** Même usage : c'est une hypothèse du principe des zéros isolés.

**Si on la retire.** $f\equiv0$ : $Z(f,\Omega)=\Omega$, fermé dans $\Omega$ mais pas discret (et non localement fini).

### H3 — $f$ holomorphe

**Rôle.** Continuité (pour « fermé ») et zéros isolés (pour « discret »).

**Si on la retire.** $f(z)=\Im(z)$ sur $\C$ est $C^\infty$, non identiquement nulle, et $Z(f,\C)=\R$ n'est pas discret.

## Idée de la preuve

« Fermé » : $Z(f,\Omega)=f^{-1}(\{0\})$ et $f$ est continue. « Discret » : c'est le principe des zéros isolés. « Localement fini » : chaque point de $\Omega$ a un disque qui contient au plus un zéro ; on recouvre un compact par un nombre fini de tels disques.

## Preuve

**Fermé dans $\Omega$.** $f$ est continue sur $\Omega$ et $\{0\}$ est fermé dans $\C$, donc $Z(f,\Omega)=f^{-1}(\{0\})$ est fermé dans $\Omega$. Concrètement : si $z_n\in Z(f,\Omega)$ et $z_n\to a\in\Omega$, alors $f(a)=\lim f(z_n)=0$, donc $a\in Z(f,\Omega)$.

**Discret.** Par le principe des zéros isolés ([[ch01-zeros-isoles]]), pour tout $z_0\in Z(f,\Omega)$ il existe $\eps>0$ tel que $f$ ne s'annule pas sur $\Omega\cap\big(D(z_0,\eps)\setminus\{z_0\}\big)$ ; quitte à diminuer $\eps$ (ce qui conserve cette propriété), on peut supposer $D(z_0,\eps)\subset\Omega$ ($\Omega$ est ouvert), et alors $D(z_0,\eps)\cap Z(f,\Omega)=\{z_0\}$ : chaque point de $Z(f,\Omega)$ est isolé.

**Localement fini.** C'est l'implication (1) $\Rightarrow$ (2) de [[ch02-localement-fini-caracterisations]] ; en voici une preuve directe. Montrons d'abord que tout $a\in\Omega$ possède un disque ouvert $D(a,r_a)\subset\Omega$ contenant **au plus un** zéro :

* si $f(a)=0$, on prend $r_a=\eps$ donné par le point précédent : $D(a,r_a)\cap Z(f,\Omega)=\{a\}$ ;
* si $f(a)\neq0$, par continuité de $f$ il existe $r_a>0$ avec $D(a,r_a)\subset\Omega$ et $f(z)\neq0$ sur $D(a,r_a)$ : $D(a,r_a)\cap Z(f,\Omega)=\emptyset$.

Soit $K\subset\Omega$ compact. Les disques ouverts $D(a,r_a)$, $a\in K$, recouvrent $K$ ; par compacité (Borel–Lebesgue), il en existe un nombre fini $D(a_1,r_{a_1}),\dots,D(a_p,r_{a_p})$ qui recouvrent $K$. Alors
$$
Z(f,\Omega)\cap K\subset\bigcup_{j=1}^p\big(D(a_j,r_{a_j})\cap Z(f,\Omega)\big)
$$
est de cardinal au plus $p$ : il est fini. $\square$

## Preuve à trous

**Fermé.** $Z(f,\Omega)=$ <trou>$f^{-1}(\{0\})$, image réciproque d'un fermé par la fonction continue $f$</trou>, est fermé dans $\Omega$.

**Discret.** Chaque zéro est isolé par <trou indice="quel théorème, et avec quelles hypothèses ?">le principe des zéros isolés, qui s'applique car $\Omega$ est connexe et $f\not\equiv0$</trou>.

**Localement fini.** Tout $a\in\Omega$ a un disque $D(a,r_a)\subset\Omega$ contenant au plus un zéro : <trou indice="distinguer selon que $f(a)$ est nul ou non">si $f(a)=0$, c'est le caractère isolé de $a$ ; si $f(a)\neq0$, la continuité de $f$ donne un disque sans zéro</trou>. Pour $K\subset\Omega$ compact, <trou indice="propriété de Borel–Lebesgue">on extrait du recouvrement $(D(a,r_a))_{a\in K}$ un sous-recouvrement fini à $p$ disques, donc $\#\big(Z(f,\Omega)\cap K\big)\le p$</trou>. $\square$

## Exemples

* **$f(z)=\sin(\pi z)$ sur $\C$** : $Z(f,\C)=\Z$, infini, mais tout compact (borné) n'en contient qu'un nombre fini ([[ch01-isole-ne-signifie-pas-fini]]).
* **Fermé dans $\Omega$, pas dans $\C$.** $f(z)=\sin\!\big(\frac{\pi}{1-z}\big)$ est holomorphe sur $\Omega=D(0,1)$ (car $1-z\neq0$), non identiquement nulle ($f(1/3)=\sin(3\pi/2)=-1$). On a $f(z)=0\iff \frac{1}{1-z}\in\Z\setminus\{0\}\iff z=1-\frac1k$, $k\in\Z\setminus\{0\}$ ; dans $D(0,1)$ il faut $k\ge1$ (si $k\le-1$, $1-\frac1k=1+\frac1{|k|}>1$). Donc
$$
Z(f,D(0,1))=\Big\{1-\frac1k : k\ge1\Big\}=\Big\{0,\tfrac12,\tfrac23,\tfrac34,\dots\Big\},
$$
qui s'accumule en $1\notin D(0,1)$ : fermé dans $D(0,1)$, mais pas dans $\C$. Tout compact $K\subset D(0,1)$ est contenu dans un $\bar D(0,\rho)$ avec $\rho<1$, qui ne contient que les zéros $1-\frac1k\le\rho$, en nombre fini.
* **Polynômes.** Pour $P$ non nul de degré $d$, $Z(P,\C)$ a au plus $d$ éléments : cas fini.

## Pièges

* > ⚠️ « Fermé » signifie fermé **dans $\Omega$**, pas dans $\C$ : les zéros peuvent s'accumuler sur le bord de $\Omega$ (exemple $\sin(\pi/(1-z))$ ci-dessus).
* « Discret » seul ne suffit pas pour « localement fini » : $\{1/n : n\ge1\}$ est discret mais pas localement fini dans $\C$ (infinité de points dans $\bar D(0,1)\ni0$). Il faut « discret **et** fermé ».
* « Localement fini » ne veut pas dire « fini » : voir $\sin(\pi z)$ ([[ch01-isole-ne-signifie-pas-fini]]).
* Pour appliquer le résultat sur un compact, vérifier que le compact est **inclus dans $\Omega$** : $\bar D(0,1)\not\subset D(0,1)$.

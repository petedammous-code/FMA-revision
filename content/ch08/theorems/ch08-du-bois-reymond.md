---
id: ch08-du-bois-reymond
type: lemma
chapter: 8
title: Lemme de du Bois-Reymond
ref: "Question 3, p. 144 (non numérotée, section VIII) — Lemme de du Bois-Reymond"
page: 144
importance: 3
depends: [ch05-primitive-integrale, ch05-integrale-fonctions-reglees, ch08-cadre-espace-courbes]
tags: [du-bois-reymond, lemme-fondamental, fonction-test, calcul-des-variations]
---
## Intuition

> 💡 On teste une fonction $B$ contre toutes les dérivées $h'$ de fonctions $h$ nulles aux deux bouts. Or ces dérivées $h'$ sont exactement les fonctions continues **de moyenne nulle** ($\int_0^1h'=h(1)-h(0)=0$). Dire que $B$ est orthogonale à toutes les fonctions de moyenne nulle, c'est dire que $B$ n'a « aucune composante non constante » : $B$ est constante.

Image mentale : dans l'espace des fonctions sur $[0;1]$, les fonctions de moyenne nulle forment un « hyperplan » dont l'orthogonal est la droite des constantes. La preuve suit exactement cette image : on teste $B$ contre **sa propre partie de moyenne nulle** $B-\bar B$, où $\bar B=\int_0^1B$ est la moyenne de $B$.

Ce lemme est la clé qui transforme la condition intégrale « $d\hat L_\gamma(h)=0$ pour toute variation $h$ » en une équation ponctuelle (l'équation d'Euler-Lagrange, [[ch08-euler-lagrange]]), via sa variante [[ch08-du-bois-reymond-derivee]]. Ici $V$ est un espace de Hilbert de dimension finie de produit scalaire $\langle\cdot,\cdot\rangle$ ([[ch08-cadre-espace-courbes]]).

## Énoncé

**Lemme (poly, Question 3, p. 144 — Lemme de du Bois-Reymond).** Soit $B:[0;1]\to V$ une fonction continue telle que pour toute fonction $h\in C^1([0;1];V)$ vérifiant $h(0)=h(1)=0$, on a
$$
\int_0^1\langle B(t),h'(t)\rangle\,dt=0 .
$$
Alors $B$ est constante.

## Hypothèses

### H1 — $B$ est continue

**Rôle.** Elle sert deux fois : (i) la fonction test $h(t)=\int_0^t(B(s)-\bar B)\,ds$ est de classe $C^1$ avec $h'=B-\bar B$ ([[ch05-primitive-integrale]]), ce qui exige l'intégrande continu ; (ii) une fonction **continue** positive d'intégrale nulle est nulle.

**Si on la retire.** Pour une fonction seulement réglée (l'intégrale du poly est celle des fonctions réglées, [[ch05-integrale-fonctions-reglees]]), la conclusion est fausse. Exemple vérifié : $e\in V$ non nul, $B(t)=0$ pour $t\neq\frac12$ et $B(\frac12)=e$. Pour toute $h$, la fonction $t\mapsto\langle B(t),h'(t)\rangle$ est nulle sauf en un point, donc d'intégrale nulle ; l'hypothèse est vérifiée, mais $B$ n'est pas constante. On ne peut conclure que « $B$ est constante sauf sur un ensemble négligeable ».

### H2 — L'identité est vraie pour **toutes** les $h\in C^1$ nulles en $0$ et en $1$

**Rôle.** On l'applique à **une** fonction test bien choisie, $h(t)=\int_0^t(B-\bar B)$, dont il faut vérifier qu'elle est admissible : $C^1$, $h(0)=0$ et $h(1)=\int_0^1B-\bar B=0$. C'est pour assurer $h(1)=0$ qu'on retranche la moyenne $\bar B$.

**Si on la retire.** (a) Si l'on teste contre moins de fonctions, la conclusion tombe. Avec les seules fonctions test $h(t)=\lambda\sin(\pi t)\,w$ ($\lambda\in\R$, $w\in V$), qui sont bien $C^1$ et nulles en $0$ et $1$, la condition s'écrit $\lambda\pi\big\langle\int_0^1\cos(\pi t)B(t)\,dt,w\big\rangle=0$. Pour $e\in V$ non nul, la fonction non constante $B(t)=\cos(2\pi t)\,e$ la vérifie, car $\int_0^1\cos(2\pi t)\cos(\pi t)\,dt=\frac12\int_0^1\big(\cos(3\pi t)+\cos(\pi t)\big)dt=\frac12\Big[\frac{\sin(3\pi t)}{3\pi}+\frac{\sin(\pi t)}{\pi}\Big]_0^1=0$. (b) À l'inverse, si l'on teste contre **toutes** les $h\in C^1$ (sans condition aux bords), on obtient plus : $B=0$. En effet $B$ est alors constante égale à un $c$ par le lemme, et $h(t)=tc$ donne $0=\int_0^1\langle c,c\rangle\,dt=\norm c_V^2$. La condition $h(0)=h(1)=0$ est exactement ce qui laisse une constante libre.

## Idée de la preuve

Soit $\bar B=\int_0^1B(s)\,ds$. La fonction test $h(t)=\int_0^t(B(s)-\bar B)\,ds$ est $C^1$, nulle en $0$ et en $1$, de dérivée $B-\bar B$. L'hypothèse donne $\int_0^1\langle B,B-\bar B\rangle=0$ ; comme $\int_0^1\langle\bar B,B-\bar B\rangle=0$, on obtient $\int_0^1\norm{B-\bar B}_V^2=0$, donc $B=\bar B$.

## Preuve

Posons $\bar B=\int_0^1B(s)\,ds\in V$ (intégrale d'une fonction continue à valeurs dans l'espace de Banach $V$) et
$$
h(t)=\int_0^t\big(B(s)-\bar B\big)\,ds,\qquad t\in[0;1].
$$
*La fonction test est admissible.* La fonction $s\mapsto B(s)-\bar B$ est continue sur $[0;1]$ ; d'après le théorème de dérivation d'une primitive ([[ch05-primitive-integrale]]), $h$ est dérivable de dérivée $h'(t)=B(t)-\bar B$ en tout $t\in]0;1[$, et la même majoration $\norm{h(t+k)-h(t)-(B(t)-\bar B)k}_V\le|k|\sup_{|s-t|\le|k|}\norm{B(s)-B(t)}_V$ donne les dérivées unilatérales en $0$ et en $1$. Ainsi $h\in C^1([0;1];V)$ avec $h'=B-\bar B$. De plus $h(0)=0$ et, par linéarité de l'intégrale, $h(1)=\int_0^1B(s)\,ds-\bar B=0$.

*Application de l'hypothèse.* On obtient
$$
0=\int_0^1\langle B(t),h'(t)\rangle\,dt=\int_0^1\big\langle B(t),B(t)-\bar B\big\rangle\,dt .
$$
D'autre part, la forme linéaire $x\mapsto\langle\bar B,x\rangle$ est continue sur $V$, donc commute avec l'intégrale :
$$
\int_0^1\big\langle\bar B,B(t)-\bar B\big\rangle\,dt=\Big\langle\bar B,\int_0^1\big(B(t)-\bar B\big)\,dt\Big\rangle=\langle\bar B,\bar B-\bar B\rangle=0 .
$$
En soustrayant les deux égalités :
$$
\int_0^1\norm{B(t)-\bar B}_V^2\,dt=\int_0^1\big\langle B(t)-\bar B,B(t)-\bar B\big\rangle\,dt=0 .
$$
*Conclusion.* La fonction $\varphi(t)=\norm{B(t)-\bar B}_V^2$ est continue, positive et d'intégrale nulle sur $[0;1]$ ; elle est donc identiquement nulle (si $\varphi(t_0)>0$, alors $\varphi\ge\varphi(t_0)/2$ sur un intervalle $J\ni t_0$ de longueur $\lambda>0$, et $\int_0^1\varphi\ge\lambda\varphi(t_0)/2>0$). Donc $B(t)=\bar B$ pour tout $t\in[0;1]$ : $B$ est constante. $\square$

## Preuve à trous

Posons <trou indice="la moyenne de B">$\bar B=\int_0^1B(s)\,ds$</trou> et choisissons la fonction test <trou indice="on veut h' = « B moins une constante », avec h(1)=0">$h(t)=\int_0^t\big(B(s)-\bar B\big)\,ds$</trou>. Elle est $C^1$ car $B$ est continue, $h'=B-\bar B$, $h(0)=0$ et <trou>$h(1)=\int_0^1B-\bar B=0$</trou> : elle est admissible, donc $\int_0^1\langle B,B-\bar B\rangle\,dt=0$.

Comme par ailleurs $\int_0^1\langle\bar B,B-\bar B\rangle\,dt=\langle\bar B,\int_0^1(B-\bar B)\rangle=0$, on obtient en soustrayant <trou>$\int_0^1\norm{B(t)-\bar B}_V^2\,dt=0$</trou>. Une fonction continue positive d'intégrale nulle étant nulle, $B\equiv\bar B$. $\square$

## Exemples

* **La réciproque est vraie.** Si $B\equiv c$ est constante, alors $\int_0^1\langle c,h'(t)\rangle\,dt=\langle c,h(1)-h(0)\rangle=0$ pour toute $h\in E_{0,0}$. Le lemme dit donc : *les fonctions continues orthogonales à toutes les $h'$, $h\in E_{0,0}$, sont exactement les constantes.*
* **Fabriquer un témoin.** $V=\R$, $B(t)=t$ (non constante). La preuve fournit la fonction test qui le détecte : $\bar B=\frac12$, $h(t)=\int_0^t(s-\frac12)\,ds=\frac{t^2-t}2$, nulle en $0$ et $1$, et $\int_0^1B\,h'\,dt=\int_0^1t\big(t-\tfrac12\big)dt=\tfrac13-\tfrac14=\tfrac1{12}\neq0$ — c'est bien $\int_0^1(t-\frac12)^2dt=\frac1{12}$.
* **Application : les courbes critiques de l'énergie sont des segments.** Pour $L=\frac12\norm v_V^2$, $d\hat L_\gamma(h)=\int_0^1\langle\gamma'(t),h'(t)\rangle\,dt$ ([[ch08-lhat-c1-differentielle]]). Si $\gamma\in E_{a,b}$ est critique, le lemme appliqué à $B=\gamma'$ (continue) donne $\gamma'\equiv c$, d'où $\gamma(t)=a+tc$ et $c=b-a$ : $\gamma$ est le segment $[a,b]$ parcouru à vitesse constante. Ici on n'a même pas besoin de la variante avec $A$.

## Pièges

* > ⚠️ La conclusion est « $B$ **constante** », pas « $B=0$ » : la condition $h(0)=h(1)=0$ laisse une constante libre (H2 (b)).
* > ⚠️ Ne pas « intégrer par parties » pour conclure ($\int\langle B,h'\rangle=-\int\langle B',h\rangle$, donc $B'=0$) : cela suppose $B$ dérivable, ce qui n'est **pas** une hypothèse. Toute la force du lemme est de ne demander que la continuité de $B$.
* La fonction test doit être **admissible** : il faut vérifier qu'elle est $C^1$ et nulle aux deux extrémités. La fonction $\int_0^tB$ seule ne convient pas (elle ne s'annule pas en $1$ en général) : il faut retrancher la moyenne.
* Ne pas confondre avec le « lemme fondamental du calcul des variations » ($\int\langle A,h\rangle=0$ pour toute $h\in E_{0,0}$ $\Rightarrow$ $A=0$), qui teste contre $h$ et non contre $h'$ ; il se déduit de la variante [[ch08-du-bois-reymond-derivee]] avec $B=0$.

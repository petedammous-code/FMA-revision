---
id: ch01-automorphismes-disque
type: proposition
chapter: 1
title: Automorphismes holomorphes du disque unité — $z\mapsto\lambda\frac{z-a}{1-\bar az}$, $a\in D$, $|\lambda|=1$
ref: Proposition I.13.3
page: 32
importance: 3
depends: [ch01-lemme-schwarz, ch01-def-biholomorphisme, ch01-groupe-automorphismes, ch01-stabilite-operations]
tags: [automorphisme, disque-unite, schwarz, homographie, biholomorphisme]
---
## Intuition

> 💡 Le disque unité $D$ est très « symétrique » : on peut envoyer n'importe quel point $a\in D$ sur le centre $0$ par une transformation holomorphe bijective de $D$ sur lui-même, la **transformation de Möbius** $f_a(z)=\dfrac{z-a}{1-\bar az}$. Ensuite, il ne reste plus de liberté qu'une **rotation** autour de $0$. Le groupe des automorphismes de $D$ a donc « $3$ paramètres réels » : $a\in D$ (deux) et l'angle $\theta$ (un).

Pourquoi ce sont **tous** les automorphismes : si $f$ est un automorphisme, on le compose avec un $f_{\cdot}$ pour qu'il fixe $0$ ; le [[ch01-lemme-schwarz|lemme de Schwarz]] (point 3) dit alors que c'est une rotation.

Rappels : un **automorphisme (holomorphe)** de $D$ est une bijection holomorphe $D\to D$ de réciproque holomorphe ([[ch01-def-biholomorphisme]]) ; l'ensemble $\mathrm{Aut}_{hol}(D)$ des automorphismes est un groupe pour la composition ([[ch01-groupe-automorphismes]]). Ici $\bar a$ désigne le **conjugué** de $a$.

## Énoncé

**Proposition (poly, Proposition I.13.3, p. 32).** Pour $a\in D$ et $z\in D$ on note
$$
f_a(z)=\frac{z-a}{1-\bar a z}.
$$
Les automorphismes holomorphes du disque unité sont les fonctions de la forme $\lambda\cdot f_a$, avec $a\in D$ et $|\lambda|=1$.

Cette proposition est le résultat de l'Exercice I.13.2 du poly, dont les étapes sont : 1) $f_a(D)\subset D$ ; 2) $f_a$ est une bijection holomorphe de $D$ dans lui-même ; 3) (grâce au point 3 du lemme de Schwarz) tout automorphisme holomorphe $f$ de $D$ s'écrit $f(z)=e^{i\theta}\dfrac{z-a}{1-\bar az}$ avec $\theta\in\R$, $a\in D$.

## Hypothèses

### H1 — $a\in D$, c'est-à-dire $|a|<1$

**Rôle.** Le dénominateur $1-\bar az$ ne s'annule qu'en $z=1/\bar a$ (si $a\neq0$), point de module $1/|a|>1$ : $f_a$ est holomorphe au voisinage de $\bar D$. Et l'identité $|1-\bar az|^2-|z-a|^2=(1-|a|^2)(1-|z|^2)$ donne $|f_a(z)|<1$ pour $|z|<1$ **parce que** $1-|a|^2>0$.

**Si on la retire.**
* $|a|>1$, par exemple $a=2$ : $f_2(z)=\dfrac{z-2}{1-2z}$ a un pôle en $z=\tfrac12\in D$ ; ce n'est même pas une fonction holomorphe sur $D$.
* $|a|=1$ : comme $a\bar a=1$, on a $1-\bar az=\bar a(a-z)$, donc $f_a(z)=\dfrac{z-a}{\bar a(a-z)}=-\dfrac1{\bar a}=-a$ pour tout $z\neq a$ : $f_a$ est **constante**, pas un automorphisme.

### H2 — $|\lambda|=1$

**Rôle.** La multiplication par $\lambda$ est alors une rotation, qui est un automorphisme de $D$ (réciproque : multiplication par $\bar\lambda=1/\lambda$).

**Si on la retire.** $\lambda=\tfrac12$, $a=0$ : $z\mapsto z/2$ envoie $D$ sur $D(0,\tfrac12)\neq D$, non surjective. $\lambda=2$ : $z\mapsto2z$ n'envoie même pas $D$ dans $D$.

### H3 — automorphisme **holomorphe**

**Rôle.** C'est l'holomorphie de $f$ et de $f^{-1}$ qui permet d'utiliser le lemme de Schwarz.

**Si on la retire.** $z\mapsto\bar z$, ou $z\mapsto z\,|z|$ (bijection continue de $D$ sur $D$, de réciproque $w\mapsto w/\sqrt{|w|}$ prolongée par $0$ en $0$) sont des bijections de $D$ qui ne sont pas de la forme $\lambda f_a$. Le groupe des homéomorphismes de $D$ est immensément plus gros.

## Idée de la preuve

Une identité algébrique montre $|f_a|<1$ sur $D$, et $f_{-a}$ est la réciproque de $f_a$ : les $\lambda f_a$ sont des automorphismes. Réciproquement, si $f$ est un automorphisme et $a=f^{-1}(0)$, alors $f\circ f_{-a}$ est un automorphisme qui fixe $0$, donc une rotation par Schwarz.

## Preuve

**Étape 0 : $f_a$ est holomorphe au voisinage de $\bar D$.** Si $a=0$, $f_0=\id$. Si $a\neq0$, $1-\bar az=0\iff z=1/\bar a$, et $|1/\bar a|=1/|a|>1$. Donc $f_a$ est une fraction rationnelle sans pôle sur le disque ouvert $D(0,1/|a|)\supset\bar D$, holomorphe ([[ch01-stabilite-operations]]).

**Étape 1 : $f_a(D)\subset D$.** Pour tout $z\in\C$,
$$
\begin{aligned}
|1-\bar az|^2-|z-a|^2 &= \big(1-\bar az-a\bar z+|a|^2|z|^2\big)-\big(|z|^2-\bar az-a\bar z+|a|^2\big)\\
&=1+|a|^2|z|^2-|z|^2-|a|^2=(1-|a|^2)(1-|z|^2).
\end{aligned}
$$
Si $|z|<1$, le membre de droite est $>0$, donc $|z-a|<|1-\bar az|$, c'est-à-dire $|f_a(z)|<1$. (Si $|z|=1$, on obtient $|f_a(z)|=1$ : $f_a$ envoie aussi le cercle unité sur lui-même.)

**Étape 2 : $f_a$ est une bijection holomorphe de $D$ sur $D$, de réciproque $f_{-a}$.** Comme $-a\in D$, $f_{-a}$ envoie aussi $D$ dans $D$. Pour $z\in D$, posons $w=f_a(z)$ ; en multipliant numérateur et dénominateur par $1-\bar az\neq0$ :
$$
f_{-a}(w)=\frac{w+a}{1+\bar aw}=\frac{(z-a)+a(1-\bar az)}{(1-\bar az)+\bar a(z-a)}=\frac{z(1-|a|^2)}{1-|a|^2}=z .
$$
Donc $f_{-a}\circ f_a=\id_D$ ; en échangeant les rôles de $a$ et $-a$, $f_a\circ f_{-a}=\id_D$. Ainsi $f_a:D\to D$ est bijective, de réciproque $f_{-a}$ holomorphe : $f_a\in\mathrm{Aut}_{hol}(D)$.

**Étape 3 : les $\lambda f_a$ sont des automorphismes.** Pour $|\lambda|=1$, la rotation $R_\lambda:z\mapsto\lambda z$ est un automorphisme de $D$ (bijection de $D$ sur $D$ car $|\lambda z|=|z|$, de réciproque $R_{\bar\lambda}$). Comme $\mathrm{Aut}_{hol}(D)$ est un groupe ([[ch01-groupe-automorphismes]], poly, Remarque I.4.2, p. 13), $\lambda f_a=R_\lambda\circ f_a\in\mathrm{Aut}_{hol}(D)$.

**Étape 4 : tout automorphisme est de cette forme.** Soit $f\in\mathrm{Aut}_{hol}(D)$ et $a:=f^{-1}(0)\in D$. Posons $\varphi:=f\circ f_{-a}$. C'est un automorphisme de $D$ (composée de deux automorphismes) et $\varphi(0)=f(f_{-a}(0))=f(a)=0$, car $f_{-a}(0)=\dfrac{0+a}{1+0}=a$. Le point 3 du [[ch01-lemme-schwarz|lemme de Schwarz]] (poly, Lemme I.13.1, p. 32) donne $\theta\in\R$ tel que $\varphi(z)=e^{i\theta}z$ sur $D$. Alors, puisque $f_{-a}\circ f_a=\id_D$,
$$
f=f\circ f_{-a}\circ f_a=\varphi\circ f_a=e^{i\theta}f_a ,
$$
qui est de la forme annoncée avec $\lambda=e^{i\theta}$. $\square$

*Complément (unicité de l'écriture).* Si $f=\lambda f_a$, alors $f^{-1}(0)=a$ (seul zéro de $f_a$) et $\lambda=f(0)/f_a(0)$ si $a\neq0$ (resp. $\lambda=f'(0)$ si $a=0$) : le couple $(\lambda,a)$ est déterminé par $f$.

## Preuve à trous

**Les $\lambda f_a$ sont des automorphismes.** Le dénominateur ne s'annule qu'en $1/\bar a\notin\bar D$. L'identité clé est <trou indice="calculer la différence des carrés des modules">$|1-\bar az|^2-|z-a|^2=(1-|a|^2)(1-|z|^2)$</trou>, qui donne $|f_a(z)|<1$ pour $|z|<1$. De plus <trou indice="la réciproque est du même type">$f_{-a}\circ f_a=f_a\circ f_{-a}=\id_D$</trou>, donc $f_a$ est un automorphisme, et $\lambda f_a$ aussi (composée avec une rotation, $\mathrm{Aut}_{hol}(D)$ est un groupe).

**Réciproque.** Soit $f$ un automorphisme et <trou indice="quel point faut-il ramener en 0 ?">$a:=f^{-1}(0)$ ; alors $\varphi=f\circ f_{-a}$ est un automorphisme qui fixe $0$ (car $f_{-a}(0)=a$)</trou>. Par <trou>le point 3 du lemme de Schwarz, $\varphi(z)=e^{i\theta}z$</trou>, donc $f=\varphi\circ f_a=e^{i\theta}f_a$. $\square$

## Exemples

* **$a=\tfrac12$.** $f_{1/2}(z)=\dfrac{z-1/2}{1-z/2}=\dfrac{2z-1}{2-z}$. On a $f_{1/2}(0)=-\tfrac12$, $f_{1/2}(\tfrac12)=0$, $f_{1/2}(1)=1$, $f_{1/2}(-1)=-1$, $f_{1/2}(i)=\dfrac{2i-1}{2-i}=\dfrac{(2i-1)(2+i)}{5}=\dfrac{-4+3i}{5}$, de module $1$ ✓. Les points $\pm1$ du bord sont fixes ; l'intérieur « glisse » vers $-1$.
* **Échanger $0$ et $a$.** $g:=-f_a$ vérifie $g(0)=a$ et $g(a)=0$. C'est une **involution** : $g(g(z))=\dfrac{f_a(z)+a}{1+\bar af_a(z)}=f_{-a}(f_a(z))=z$.
* **Dérivées et inégalité de Schwarz–Pick en $0$.** $f_a'(z)=\dfrac{(1-\bar az)+\bar a(z-a)}{(1-\bar az)^2}=\dfrac{1-|a|^2}{(1-\bar az)^2}$, donc $f_a'(0)=1-|a|^2$ et $f_a'(a)=\dfrac1{1-|a|^2}$. Application : si $f\in\Hol(D)$, $f(D)\subset D$ et $b:=f(0)$, alors $g:=f_b\circ f$ envoie $D$ dans $D$ et fixe $0$ ; Schwarz donne $|g'(0)|\le1$, et $g'(0)=f_b'(b)f'(0)=\dfrac{f'(0)}{1-|b|^2}$, d'où $|f'(0)|\le1-|f(0)|^2$.

## Pièges

* > ⚠️ C'est $1-\bar az$ (avec le **conjugué**) au dénominateur, pas $1-az$ : avec $1-az$ et $a\notin\R$, on n'a plus $|f|=1$ sur le cercle unité ni $f(D)\subset D$ en général.
* $\lambda f_a$ et $f_a\circ R_\lambda$ ($z\mapsto f_a(\lambda z)$) sont tous deux des automorphismes ; ils s'écrivent chacun sous la forme $\lambda' f_{a'}$, mais avec des paramètres différents en général : le groupe $\mathrm{Aut}_{hol}(D)$ n'est **pas commutatif** ($f_{1/2}\circ R_{-1}\neq R_{-1}\circ f_{1/2}$ : en $0$, valeurs $-\tfrac12$ et $\tfrac12$).
* Les automorphismes de $D$ ne sont **pas** affines (contrairement à ceux de $\C$, qui sont les $z\mapsto az+b$, $a\neq0$) : la géométrie du domaine fixe le groupe.
* Pour montrer qu'une fonction est un automorphisme, il faut aussi la surjectivité sur $D$ ; montrer $f(D)\subset D$ ne suffit pas (exemple : $z\mapsto z/2$).
